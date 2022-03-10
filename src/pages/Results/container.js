import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import _map from 'lodash/map';
import _get from 'lodash/get';
import Image from 'components/Image';
import UnsplashManager from 'utils/UnsplashManager';
import useAutocompleteOptions from 'hooks/useAutocompleteOptions';
import useModal from 'hooks/useModal';
import { MIN_LENGTH_TO_SEARCH } from './consts';
import messages from './messages';
import { formatName, getImageBottomLabel } from './utils';
import ViewPage from './view';

const Results = () => {
  const navigate = useNavigate();
  const { onChange, options } = useAutocompleteOptions(MIN_LENGTH_TO_SEARCH);
  const [photos, setPhotos] = useState([]);
  const { key } = useParams();
  const { openModal } = useModal();

  useEffect(() => {
    UnsplashManager.getPhotosList(key).then((res) => {
      const data = res.response.results;
      setPhotos(
        _map(data, (entry) => ({
          id: entry.id,
          image: entry.urls.regular,
        }))
      );
    });
  }, [key]);

  const onSubmit = (values) => {
    navigate(`/images/${values.key}`);
  };

  const onImageClick = (id) => {
    UnsplashManager.getPhoto(id).then((res) => {
      const data = res.response;
      const userName = formatName(data.user.first_name, data.user.last_name);
      const location =
        _get(data, 'location.name', messages.unknown) || messages.unknown;
      const createdAt = data.created_at;

      openModal({
        title: `Location: ${location} `,
        payload: (
          <Image
            src={data.urls.regular}
            label={getImageBottomLabel(userName, createdAt)}
          />
        ),
      });
    });
  };

  return (
    <ViewPage
      onSubmit={onSubmit}
      onImageClick={onImageClick}
      onChange={onChange}
      options={options}
      photos={photos}
      title={key}
      initialValues={{ key }}
    />
  );
};

export default Results;
