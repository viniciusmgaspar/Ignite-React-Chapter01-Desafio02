import { GenreResponseProps } from "../App";
import { Button } from "./Button";

interface SideBarProps {
  genres: GenreResponseProps[];
  selectedGenreId: number;
  selectGenre: (genreId: number) => void;
}

export function SideBar({ genres, selectGenre, selectedGenreId }: SideBarProps) {
  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              id={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => selectGenre(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  )
}