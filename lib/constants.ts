export interface Event {
  image: string,
  title: string,
  slug: string,
  location: string,
  date: string,
  time: string,
}

export const events: Event[] = [
  {
    image: '/images/event1.png',
    title: 'React Summit 2026',
    slug: 'react-summit-2026',
    location: 'Amsterdam, Netherlands',
    date: 'Oct 20, 2026',
    time: '09:00 - 18:00',
  },
  {
    image: '/images/event2.png',
    title: 'GitHub Universe 2026',
    slug: 'github-universe-2026',
    location: 'San Francisco, CA',
    date: 'Oct 27, 2026',
    time: '08:30 - 17:30',
  },
  {
    image: '/images/event3.png',
    title: 'KubeCon + CloudNativeCon North America',
    slug: 'kubecon-na-2026',
    location: 'Los Angeles, CA',
    date: 'Nov 10, 2026',
    time: '08:00 - 17:00',
  },
  {
    image: '/images/event4.png',
    title: 'AWS re:Invent 2026',
    slug: 'aws-reinvent-2026',
    location: 'Las Vegas, NV',
    date: 'Nov 30, 2026',
    time: '09:00 - 18:30',
  },
  {
    image: '/images/event5.png',
    title: 'ETHGlobal Bangkok',
    slug: 'ethglobal-bangkok-2026',
    location: 'Bangkok, Thailand',
    date: 'Dec 4, 2026',
    time: '10:00 - 22:00',
  },
  {
    image: '/images/event6.png',
    title: 'SFJS Monthly Meetup',
    slug: 'sfjs-december-2026',
    location: 'San Francisco, CA',
    date: 'Dec 15, 2026',
    time: '18:30 - 21:00',
  },
]
