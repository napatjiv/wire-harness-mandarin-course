# 线束中文课程 — Wire Harness Mandarin Course

An interactive HSK 3-4 level Mandarin Chinese course built around the wire harness industry and Yazaki Corporation.

## What is this?

A language learning app that teaches Mandarin Chinese through the lens of wire harness manufacturing — perfect for anyone working in the automotive wire harness industry who wants to learn Chinese, or Chinese learners who want industry-specific vocabulary.

### Course Structure

| Lesson | Topic | Focus |
|--------|-------|-------|
| 第一课 | What is a Wire Harness? | Basic concepts, Yazaki intro |
| 第二课 | Components | Wire, connector, terminal, grommet, insulation |
| 第三课 | Manufacturing Process | Cutting, stripping, crimping, assembly, QC |
| 第四课 | Yazaki & Industry Trends | EV/HEV, aluminum vs copper, multiplexing |
| 第五课 | Workplace Chinese | Meetings, supplier communication, reporting |

### Features

- **40 vocabulary words** with pinyin, English translations, and contextual example sentences
- **5 reading passages** with toggle-able English translations
- **15 quiz questions** with instant feedback and scoring
- **Technical terms preserved in English** (wire harness, connector, terminal, crimping, etc.) — only non-technical verbs and nouns are in Chinese
- **HSK 3-4 level** grammar and vocabulary

## Getting Started

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/wire-harness-mandarin-course.git
cd wire-harness-mandarin-course

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Tech Stack

- React 18
- Vite
- No external UI libraries — pure inline styles

## Design Approach

- **Chinese-first**: Readings and vocab are presented in Chinese first, with English as a reveal
- **Industry-accurate**: Content is based on real Yazaki products, processes, and industry terminology
- **Technical nouns stay English**: Words like wire harness, connector, terminal, crimping, assembly board, grommet, stripping, multiplexing remain in English (highlighted in purple) since these are used as-is in international industry contexts
- **All other language is Mandarin**: Verbs, adjectives, grammar structures, and general nouns are in Chinese at HSK 3-4 level

## License

MIT
