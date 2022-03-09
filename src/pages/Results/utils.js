import { format as formatDate } from 'date-fns';

const formatName = (firstName, lastName) =>
  `${firstName || '-'} ${lastName || '-'}`;

const getImageBottomLabel = (author, createdAt) => {
  const formattedDate = formatDate(new Date(createdAt), 'MMMM yyyy');
  return `${author}, ${formattedDate}`;
};

export { formatName, getImageBottomLabel };
