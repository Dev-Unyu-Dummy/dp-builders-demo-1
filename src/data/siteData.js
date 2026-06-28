import {
  Bath,
  BrickWall,
  Brush,
  Building2,
  ChefHat,
  Fence,
  Hammer,
  Home,
  Layers3,
  PanelsTopLeft,
  Pickaxe,
  Ruler,
  Shovel,
  Sofa,
  Trees,
  Wrench,
} from 'lucide-react'

export const company = {
  name: 'DP Builders',
  tagline: 'Property & Interior Development',
  phone: '+44 020 0000 0000',
  email: 'hello@dpbuilders.co.uk',
  address: '123 Blueprint Yard, London, UK',
  hours: 'Mon to Sat, 08:00 to 18:00',
}

export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Contact', to: '/contact' },
]

export const services = [
  {
    title: 'Kitchen Development',
    icon: ChefHat,
    summary: 'Bespoke kitchen installations, cabinetry, worktops, plumbing coordination and final finishes.',
  },
  {
    title: 'Bathroom Renovation',
    icon: Bath,
    summary: 'Modern wet rooms, family bathrooms, waterproofing, tiling, fixtures and practical storage.',
  },
  {
    title: 'Interior Fit-Out',
    icon: Sofa,
    summary: 'Calm, durable interiors with joinery, finishes, lighting preparation and detail-led completion.',
  },
  {
    title: 'House Extensions',
    icon: Home,
    summary: 'Rear, side and wraparound extension works prepared for everyday living and long-term value.',
  },
  {
    title: 'Landscaping',
    icon: Trees,
    summary: 'Garden layouts, patios, paths, planting zones, levels and exterior living improvements.',
  },
  {
    title: 'Conversions',
    icon: Building2,
    summary: 'Loft, garage and room conversions planned around usable space, compliance and clean finishes.',
  },
  {
    title: 'Tiling',
    icon: PanelsTopLeft,
    summary: 'Wall and floor tiling for bathrooms, kitchens, entrances and high-traffic commercial areas.',
  },
  {
    title: 'Carpentry',
    icon: Hammer,
    summary: 'First and second fix carpentry, fitted storage, skirting, doors and tailored timber detailing.',
  },
  {
    title: 'Fencing',
    icon: Fence,
    summary: 'Boundary fencing, gates, repairs and privacy screens built with a neat, robust finish.',
  },
  {
    title: 'Driveway Paving',
    icon: Shovel,
    summary: 'Block paving, stone, edging, drainage preparation and driveway refresh works.',
  },
  {
    title: 'Flooring',
    icon: Layers3,
    summary: 'Engineered timber, laminate, vinyl, subfloor preparation and finishing trims.',
  },
  {
    title: 'Shed Building',
    icon: Wrench,
    summary: 'Garden rooms, sheds, bases, cladding and practical outdoor storage structures.',
  },
  {
    title: 'Structural Work',
    icon: BrickWall,
    summary: 'Openings, steel coordination, load-bearing alterations and builder-ready structural preparation.',
  },
]

export const portfolioCategories = [
  {
    title: 'Kitchen & Bathroom',
    count: '18 projects',
    description: 'Clean installations with measured storage, premium surfaces and water-ready detailing.',
    accent: 'Wet zones',
  },
  {
    title: 'Extensions & Conversions',
    count: '12 projects',
    description: 'More room for living, working and gathering without losing the character of the home.',
    accent: 'New space',
  },
  {
    title: 'Interior & Carpentry',
    count: '21 projects',
    description: 'Fitted storage, interior finishes and practical details that make the room work harder.',
    accent: 'Fine finish',
  },
  {
    title: 'Exterior Works',
    count: '16 projects',
    description: 'Landscaping, fencing, paving and outdoor structures made to handle British weather.',
    accent: 'Kerb appeal',
  },
  {
    title: 'Tiling & Flooring',
    count: '14 projects',
    description: 'Durable surfaces with tight lines, smart transitions and minimal visual noise.',
    accent: 'Surfaces',
  },
  {
    title: 'Structural Preparation',
    count: '9 projects',
    description: 'Carefully phased works for openings, alterations and builder-led structural upgrades.',
    accent: 'Heavy work',
  },
]

export const processSteps = [
  {
    title: 'Survey',
    text: 'We inspect the property, measure the space and identify constraints before any work is priced.',
  },
  {
    title: 'Scope',
    text: 'You receive a clear scope with phases, assumptions, material placeholders and timing.',
  },
  {
    title: 'Build',
    text: 'Our team coordinates the site, trades and finish details with tidy progress communication.',
  },
  {
    title: 'Handover',
    text: 'We review the finished work with you and capture any final refinements before completion.',
  },
]

export const galleryItems = [
  { title: 'Handleless kitchen installation', category: 'Kitchen', size: 'h-80' },
  { title: 'Compact wet room renovation', category: 'Bathroom', size: 'h-96' },
  { title: 'Oak flooring and skirting detail', category: 'Flooring', size: 'h-72' },
  { title: 'Garden paving and edge drainage', category: 'Landscaping', size: 'h-[28rem]' },
  { title: 'Loft conversion staircase', category: 'Conversion', size: 'h-80' },
  { title: 'Bespoke alcove cabinetry', category: 'Carpentry', size: 'h-96' },
  { title: 'Rear extension shell works', category: 'Extension', size: 'h-72' },
  { title: 'Bathroom tile setting', category: 'Tiling', size: 'h-[30rem]' },
  { title: 'Driveway paving refresh', category: 'Paving', size: 'h-80' },
  { title: 'Cedar boundary fencing', category: 'Fencing', size: 'h-72' },
  { title: 'Garden shed with clad finish', category: 'Shed', size: 'h-96' },
  { title: 'Structural opening preparation', category: 'Structural', size: 'h-[27rem]' },
]

export const testimonials = [
  {
    name: 'Amelia Carter',
    location: 'Richmond',
    quote:
      'DP Builders turned a tired kitchen into a space that feels calm, sharp and genuinely easier to use every day.',
    service: 'Kitchen renovation',
  },
  {
    name: 'Oliver Bennett',
    location: 'Croydon',
    quote:
      'The extension was handled with clear communication from survey to handover. The finish feels considered, not rushed.',
    service: 'House extension',
  },
  {
    name: 'Priya Shah',
    location: 'Wimbledon',
    quote:
      'They solved awkward storage, flooring and tiling details without making the project feel complicated for us.',
    service: 'Interior fit-out',
  },
  {
    name: 'Noah Edwards',
    location: 'Kingston',
    quote:
      'The team kept the garden project tidy and delivered the paving, fencing and shed exactly as scoped.',
    service: 'Exterior works',
  },
]

export const stats = [
  { value: '120+', label: 'completed projects' },
  { value: '13', label: 'service disciplines' },
  { value: '4.9/5', label: 'average client rating' },
]

export const featureIcons = [Ruler, Pickaxe, Brush]
