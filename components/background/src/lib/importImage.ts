const importImage = async (background: string) => {
  const image = await import(`./backgrounds/${background}.{png|jpg|jpeg}`);
};

export { importImage };
