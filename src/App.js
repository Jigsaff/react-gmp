import { useState } from 'react';
import { Dialog } from './components/Dialog/component2';
import MovieForm from './components/MovieForm';

function App() {
  return (
    <div>
      {/* <p className="text-4xl subpixel-antialiased font-semibold text-center mt-8">React
        Global
        Mentoring Program</p>
      <div
        className="container mx-auto bg-light-black rounded-xl shadow border p-8 m-10">
        <p className="text-2xl text-center text-white">Dialog</p>
        <div className="mt-8 flex flex-row flex-wrap">

          <Dialog title="congratulations!"
            onClose={() => { console.log('onClose'); }}>
            <p className="text-white pt-8">The movie has been added to
              database successfully.</p>

          </Dialog>

        </div>
      </div> */}

      <div
        className="container mx-auto bg-light-black rounded-xl shadow border p-8 m-10">
        <p className="text-2xl text-center text-white">MovieForm</p>
        <div className="mt-8">
          <Dialog onClose={() => console.log('onClose')}>
            <MovieForm onSubmit={(movie) => { console.log(movie); }} />
          </Dialog>
        </div>
      </div>

    </div>
  );
}

export default App;
