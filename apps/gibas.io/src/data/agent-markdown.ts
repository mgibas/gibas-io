import { getOrderedCollection } from '@src/lib/content'
import { profile } from '@data/profile'

const absoluteUrl = (href: string) => new URL(href, profile.url).href
const location = `${profile.location.city}, ${profile.location.region}`

export async function profileMarkdown(): Promise<string> {
  const sections = await getOrderedCollection('sections')
  const projects = await getOrderedCollection('projects')

  const header = [
    `# ${profile.name}`,
    `> ${profile.description}`,
    [
      `- Location: ${location}`,
      `- Works at: [${profile.employer.name}](${profile.employer.url})`,
      `- LinkedIn: ${profile.social.linkedin}`,
      `- GitHub: ${profile.social.github}`,
      `- X: ${profile.social.x}`,
    ].join('\n'),
  ]

  const body = sections.map((section) => {
    const parts = [`## ${section.data.title}`, section.body?.trim() ?? '']
    if (section.id === 'work') {
      parts.push(
        projects
          .map((project) => `- [${project.data.title}](${absoluteUrl(project.data.href)}): ${project.body?.trim()}`)
          .join('\n'),
      )
    }
    return parts.join('\n\n')
  })

  return [...header, ...body].join('\n\n') + '\n'
}

export async function llmsTxt(): Promise<string> {
  const projects = await getOrderedCollection('projects')

  return (
    [
      `# ${profile.name}`,
      `> ${profile.jobTitle} at ${profile.employer.name}, based in ${location}. ${profile.description}`,
      '## Pages',
      `- [Full profile](${absoluteUrl('/index.md')}): About, approach, personal life, featured work and contact`,
      '## Projects',
      projects
        .map((project) => `- [${project.data.title}](${absoluteUrl(project.data.href)}): ${project.body?.trim()}`)
        .join('\n'),
      '## Profiles',
      [
        `- [LinkedIn](${profile.social.linkedin})`,
        `- [GitHub](${profile.social.github})`,
        `- [X](${profile.social.x})`,
      ].join('\n'),
    ].join('\n\n') + '\n'
  )
}
