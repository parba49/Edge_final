export default function Footer() {
  return (
    <section className='bg-slate-900 text-white'>
      <footer className='container mx-auto'>
        <div className='p-4 flex justify-between items-center'>
          <p>All Rights Reserved | Copyright {new Date().getFullYear()}</p>
          <p>Design & Developed by Team Nullable</p>
        </div>
      </footer>
    </section>
  );
}
