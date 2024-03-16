// في ملف ProductItemsStyle.ts

export const cardStyle = {
  cursor: "pointer",
  maxWidth: 333,
  mt: 6,
  ":hover .MuiCardMedia-root ": {
    rotate: "1deg",
    scale: "1.1",
    transition: "0.35s",
  },
};

export const cardMediaStyle = {
  height: 277,
};

export const typographyStyle = {
  textDecoration: "none",
};

export const buttonStyle = {
  mt: 2,
  ml: 2,
  display: "flex",
  bgcolor: "#c93734",
  ":hover": {
    bgcolor: "#db3d3a",
  },
};
