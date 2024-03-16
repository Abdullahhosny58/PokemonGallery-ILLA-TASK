import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";
export interface Pokemon {
  id: number;
  name: string;
  types: { type: { name: string } }[];
  abilities: { ability: { name: string } }[];
  moves: { move: { name: string } }[];
  stats: { base_stat: number; stat: { name: string } }[];
  sprites: { front_default: string };
}

export interface ButtonData {
  label: string;
  type: string;
}

interface NavStyle {
  flexGrow: SxProps<Theme>;
  appBar: SxProps<Theme>;
  container: SxProps<Theme>;
  leftSide: SxProps<Theme>;
  logo: SxProps<Theme>;
  typography: SxProps<Theme>;
  search: SxProps<Theme>;
  searchIconWrapper: SxProps<Theme>;
  styledInputBase: SxProps<Theme>;
  SearchIcon: SxProps<Theme>;
}

export interface NavStyles {
  flexGrow: SxProps<Theme>;
  appBar: SxProps<Theme>;
  container: SxProps<Theme>;
  leftSide: SxProps<Theme>;
  logo: SxProps<Theme>;
  typography: SxProps<Theme>;
  search: SxProps<Theme>;
  searchIconWrapper: SxProps<Theme>;
  styledInputBase: SxProps<Theme>;
}

export default NavStyle;
