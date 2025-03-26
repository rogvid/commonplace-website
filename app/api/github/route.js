import { NextResponse } from 'next/server';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;

export async function GET() {
  if (!GITHUB_TOKEN || !GITHUB_USERNAME) {
    return NextResponse.json(
      { error: 'GitHub credentials not configured' },
      { status: 500 }
    );
  }

  try {
    // Fetch user events
    const eventsResponse = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/events?per_page=100`,
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.v3+json',
        },
      }
    );

    if (!eventsResponse.ok) {
      throw new Error('Failed to fetch GitHub events');
    }

    const events = await eventsResponse.json();

    // Process events into activities
    const activities = events
      .filter(event => {
        // Filter for relevant event types
        return ['PushEvent', 'IssuesEvent', 'PullRequestEvent'].includes(event.type);
      })
      .map(event => {
        const baseActivity = {
          id: event.id,
          date: event.created_at,
          repo: event.repo.name,
        };

        switch (event.type) {
          case 'PushEvent':
            return {
              ...baseActivity,
              type: 'commit',
              title: `Pushed ${event.payload.commits.length} commits to ${event.repo.name}`,
              description: event.payload.commits[0]?.message || 'No commit message',
              link: `https://github.com/${event.repo.name}/commit/${event.payload.head}`,
            };

          case 'IssuesEvent':
            return {
              ...baseActivity,
              type: 'issue',
              title: `${event.payload.action} issue #${event.payload.issue.number}`,
              description: event.payload.issue.title,
              link: event.payload.issue.html_url,
            };

          case 'PullRequestEvent':
            return {
              ...baseActivity,
              type: 'pull_request',
              title: `${event.payload.action} pull request #${event.payload.pull_request.number}`,
              description: event.payload.pull_request.title,
              link: event.payload.pull_request.html_url,
            };

          default:
            return null;
        }
      })
      .filter(Boolean); // Remove null entries

    return NextResponse.json(activities);
  } catch (error) {
    console.error('GitHub API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch GitHub activities' },
      { status: 500 }
    );
  }
} 