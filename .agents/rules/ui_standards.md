# UI & Design Standards for Metamorph Web

## 1. Strict Zero-Emoji Rule
- **NEVER use unicode emojis** in UI elements, buttons, titles, cards, or documentation.
- Use vector icons from `lucide-react` exclusively.
- Use official vector SVGs for external ecosystem brands:
  - GitHub: `/github.svg`
  - NPM: `/icons8-ngp.svg`
  - Metamorph Butterfly Logo: `/logo_metamorph.png`

## 2. Cyber-Glass Design Language
- **Backgrounds**: Obsidian `#06090e` with ambient radial glows (`rgba(0, 242, 254, 0.12)`).
- **Cards**: `.neo-card` with border `border-slate-800/80` and hover cyan shadow `hover:shadow-[0_0_25px_rgba(0,242,254,0.15)]`.
- **Borders & Dividers**: Subtle cyan translucent accents (`border-cyan-500/15`).
- **Typography**: Google Fonts Outfit for headings, Inter for body copy, JetBrains Mono for commands.

## 3. Mathematical Centering in Toolbars & Headers
- Avoid plain `flex justify-between` when left and right elements have asymmetric widths.
- Use `md:absolute md:left-1/2 md:-translate-x-1/2` to lock central navigation docks and search bars to 50% viewport width.
- Enclose floating navigation in subtle pills:
  ```tsx
  className="hidden md:flex items-center gap-1 md:absolute md:left-1/2 md:-translate-x-1/2 bg-[#090f1d]/90 border border-cyan-500/20 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-[0_0_25px_rgba(0,242,254,0.08)]"
  ```

## 4. Accessibility & Feedback
- Focus states must have glowing `:focus-visible` rings.
- Text selection uses cyan neon highlight (`selection:bg-cyan-500/30 selection:text-white`).
- Smooth scrolling enabled globally on `html`.
- Copy buttons must provide 2-second visual feedback (`Copied` checkmark).
