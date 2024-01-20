import './assets/tailwind.css'
import Header from './Header';
import AuthModal from './AuthModal';

function App() {
  return (
    <div>
      <Header></Header>
      <AuthModal></AuthModal>
      <div className='mx-6 relative'>
        <div>
          <aside className='relative block'>
            <section className="inline-block pt-5 pb-10">
              <div className="title">
                <a href="" className='text-blue-400'>
                  Today's Best
                </a>
              </div>
            </section>
            <section className="inline-block pt-5 pb-10">
              <div className="title">
                <a href="" className='text-blue-400'>
                  NBA
                  <span className='text-black'> Popular Posts</span>
                </a>
              </div>
            </section>
          </aside>
        </div>
        <div>
          <div>
            <h1 className='text-black-200 text-4xl' text->NBA</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
