const SectionHeader = ({ index, eyebrow, title, children }) => (
  <div className='grid gap-6 md:grid-cols-[1fr_1.4fr] md:items-end'>
    <div>
      <p className='eyebrow'>
        {index} — {eyebrow}
      </p>
      <h2 className='section-title mt-4'>{title}</h2>
    </div>
    {children && <p className='max-w-xl text-muted md:justify-self-end'>{children}</p>}
  </div>
);

export default SectionHeader;
