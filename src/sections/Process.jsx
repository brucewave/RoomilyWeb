import { process } from "../constants";

// Section duy nhất trên mặt kem sáng, giống cách MT House xen mặt warm giữa các nền tối.
const Process = () => (
  <section id='process' className='surface-warm py-section'>
    <div className='wrap'>
      <div className='grid gap-6 md:grid-cols-[1fr_1.4fr] md:items-end'>
        <div>
          <p className='eyebrow'>03 — Cách làm việc</p>
          <h2 className='section-title mt-4'>Từ yêu cầu đến website chạy thật</h2>
        </div>
      </div>

      <ol className='mt-14 grid gap-px bg-line-warm sm:grid-cols-2 lg:grid-cols-4'>
        {process.map((step, i) => (
          <li key={step.title} className='bg-[#F4EEE4] p-6'>
            <span className='label tabular-nums text-warm-text'>{String(i + 1).padStart(2, "0")}</span>
            <h3 className='mt-4 font-serif text-h3'>{step.title}</h3>
            <p className='mt-3 text-[15px] text-warm-text'>{step.text}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Process;
