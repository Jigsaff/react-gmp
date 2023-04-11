import Dialog from './components/Dialog';
import MovieForm from './components/MovieForm';

function App() {

  return (
      <div>
        <p className="text-4xl subpixel-antialiased font-semibold text-center mt-8">React
          Global
          Mentoring Program</p>
        <div
            className="container mx-auto bg-light-black rounded-xl shadow border p-8 m-10">
          <p className="text-2xl text-center text-white">Dialog</p>
          <div className="mt-8 flex flex-row flex-wrap">

            <Dialog title="congratulations!"
                    onClose={() => {console.log('onClose');}}>
              {/*<div*/}
              {/*    className="w-12 h-12 rounded-full bg-red-500 flex justify-center items-center">*/}
              {/*  <svg xmlns="http://www.w3.org/2000/svg" fill="none"*/}
              {/*       viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"*/}
              {/*       className="w-6 h-6 text-white">*/}
              {/*    <path strokeLinecap="round" strokeLinejoin="round"*/}
              {/*          d="M4.5 12.75l6 6 9-13.5"/>*/}
              {/*  </svg>*/}
              {/*</div>*/}
              <p className="text-white pt-8">The movie has been added to
                database successfully.</p>

            </Dialog>

          </div>
        </div>

        <div
            className="container mx-auto bg-light-black rounded-xl shadow border p-8 m-10">
          <p className="text-2xl text-center text-white">MovieForm</p>
          <div className="mt-8">

            <MovieForm onSubmit={(movie) => {console.log(movie);}}/>

          </div>
        </div>

      </div>
  );
}

export default App;
