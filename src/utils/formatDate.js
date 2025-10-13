export default function formatDate({ date }) {
  return new Date(date).toLocaleDateString('ko-KR', {
    day: 'numeric',
    weekday: 'long',
  });
}
