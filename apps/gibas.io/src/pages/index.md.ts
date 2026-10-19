import type { APIRoute } from 'astro'
import { profileMarkdown } from '@data/agent-markdown'

export const GET: APIRoute = async () =>
  new Response(await profileMarkdown(), { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } })
