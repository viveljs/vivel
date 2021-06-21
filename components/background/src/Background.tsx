import * as React from 'react';

interface BackgroundProps {
  background: string;
}

const Background: React.FC<BackgroundProps> = ({ background, children }) => {
  const [bgImage, setbgImage] = React.useState('');
  React.useEffect(() => {
    const fetchBackground = async () => {
      const image = import(`./backgrounds/${background}.{png|jpg|jpeg}`);
      setbgImage(image.default);
    };
    fetchBackground();
  }, []);

  const style: React.CSSProperties = {
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'end',
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    height: '100vh',
  };

  return <main style={style}>{children}</main>;
};

export { Background };
