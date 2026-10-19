interface HastNode {
  type: string
  tagName?: string
  properties?: Record<string, unknown>
  children?: HastNode[]
  value?: string
}

const externalIcon: HastNode = {
  type: 'element',
  tagName: 'svg',
  properties: {
    className: ['ml-0.5', 'inline-block', 'size-[0.8em]', 'align-[-0.05em]'],
    ariaHidden: 'true',
    fill: 'none',
    viewBox: '0 0 24 24',
    stroke: 'currentColor',
    strokeWidth: '2.25',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
  children: [{ type: 'element', tagName: 'path', properties: { d: 'M7 17 17 7M8 7h9v9' }, children: [] }],
}

const newTabNotice: HastNode = {
  type: 'element',
  tagName: 'span',
  properties: { className: ['sr-only'] },
  children: [{ type: 'text', value: ' (opens in a new tab)' }],
}

function decorateExternalLinks(node: HastNode): void {
  const href = node.tagName === 'a' ? node.properties?.href : undefined
  if (typeof href === 'string' && href.startsWith('http')) {
    node.properties = { ...node.properties, target: '_blank' }
    node.children = [...(node.children ?? []), structuredClone(externalIcon), structuredClone(newTabNotice)]
    return
  }
  node.children?.forEach(decorateExternalLinks)
}

export default function rehypeExternalLinks() {
  return decorateExternalLinks
}
