import { action } from '@storybook/addon-actions';
import Dialog from '../components/Dialog';
import MovieForm from '../components/MovieForm';

export default {
  title: 'Dialog with MovieForm',
  component: Dialog,
  parameters: {
    component: Dialog,
  },
};

const Template = (args) => (<MovieForm {...args} />);
export const AddMovieFormDialog = () => (
    <Dialog isOpen title="Add Movie">
      <Template
          initialMovieInfo={{}}
          onSubmit={action('submit')}
      />
    </Dialog>
);

AddMovieFormDialog.storyName = 'Add Movie Form Dialog';

export const EditMovieFormDialog = () => (
    <Dialog isOpen title="Edit Movie">
      <Template
          initialMovieInfo={{
            title: 'Joker',
            releaseDate: '2019-08-31',
            movieUrl: 'https://www.imdb.com/title/tt7286456/',
            rating: '8.4',
            genre: 'Crime, Drama, Thriller',
            duration: '2h 2min',
            overview: 'The rise of Arthur Fleck, from aspiring stand-up comedian and pariah to Gotham\'s clown prince and leader of the revolution.',
          }}
          onSubmit={action('submit')}
      />
    </Dialog>
);

EditMovieFormDialog.storyName = 'Edit Movie Form Dialog';

export const DeleteMovieModal = () => (
    <Dialog isOpen title="Delete Movie">
      <div className="flex flex-col items-end">
        <p className="text-xl text-white my-9">Are you sure you want to delete
          this movie?</p>
        <button
            className="rounded py-2 px-8 border-2 border-[#F65261] bg-[#F65261] text-white uppercase font-medium text-xl"
            onClick={action('delete')}>Confirm
        </button>
      </div>
    </Dialog>
);
DeleteMovieModal.storyName = 'Delete Movie Modal';
