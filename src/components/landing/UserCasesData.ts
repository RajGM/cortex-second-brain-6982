
import { UserCasesData, Book } from './UseCasesTypes';

export const userCasesData: UserCasesData = {
  Marketers: {
    title: 'Save and find quotes & highlights',
    subtitle: 'that inspire you.',
    description: "nature scene now feels like a stimulation. We are overloaded with digital imagery. The internet has delivered the world to us on a silver platter from the glacial landscapes of Greenland to the cracks lining the Sahara desert. We've seen the deep ocean, microscopic bacteria, the insides of our own bodies.",
    quote: "True change is within.",
    background: 'bg-[#ff4d3c]',
    textColor: 'text-white',
    ctaText: 'SAVE TO MY MIND'
  },
  Designers: {
    title: 'Create instant, boundless',
    subtitle: 'visual moodboards.',
    description: '',
    quote: '',
    background: 'bg-[#d8ede7]',
    textColor: 'text-white',
    ctaText: '',
    showImageGrid: true
  },
  Writers: {
    title: 'Write without',
    subtitle: 'distractions.',
    description: '',
    quote: '',
    background: 'bg-[#f7c2d2]',
    textColor: 'text-white',
    ctaText: 'ADD NEW NOTE',
    showNotepad: true
  },
  Researchers: {
    title: 'Collect all your research &',
    subtitle: 'references in one place.',
    description: '',
    quote: '',
    background: 'bg-[#e8f4f8]',
    textColor: 'text-white',
    ctaText: '',
    showBrain: true
  },
  Developers: {
    title: 'Your private',
    subtitle: 'resource & reference hub.',
    description: '',
    quote: '',
    background: 'bg-[#1a1f2c]',
    textColor: 'text-white',
    ctaText: '',
    showDevTools: true
  },
  Everyone: {
    title: 'A place for everything',
    subtitle: 'you want to remember.',
    description: '',
    quote: '',
    background: 'bg-[#e8ecf0]',
    textColor: 'text-white',
    ctaText: '',
    showTags: true
  }
};

export const booksData: Book[] = [{
  title: "The Creative Mind",
  author: "Maria Johnson",
  coverColor: "bg-[#f97316]",
  textColor: "text-white"
}, {
  title: "Design Patterns",
  author: "Alex Thompson",
  coverColor: "bg-[#8b5cf6]",
  textColor: "text-white"
}, {
  title: "The Art of Focus",
  author: "Sarah Williams",
  coverColor: "bg-[#0ea5e9]",
  textColor: "text-white"
}, {
  title: "Digital Minimalism",
  author: "Cal Newport",
  coverColor: "bg-[#d946ef]",
  textColor: "text-white"
}, {
  title: "Atomic Habits",
  author: "James Clear",
  coverColor: "bg-[#f97316]",
  textColor: "text-white"
}];
