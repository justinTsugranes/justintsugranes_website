import { Row } from 'react-bootstrap';
import { Parallax } from 'react-parallax';
// import { heroAbout } from '../../assets';
import { useFetchData } from '../../hooks/useFetchData';
import { urlFor } from '../../lib/client';

const AboutSectionTwo = () => {
  const { data, error } = useFetchData(`*[_type == "banner"]`);

  if (error) {
    return <p>{error.message}</p>;
  }

  const headshot = data.filter((item) => item.title === 'headshot01');

  return (
    <Row>
      <Parallax
        bgImage={urlFor(headshot[0]?.image)}
        bgImageAlt={headshot[0]?.altText}
        strength={500}
        className="h-75">
        <div style={{ height: '75vh' }} />
      </Parallax>
    </Row>
  );
};

export default AboutSectionTwo;
