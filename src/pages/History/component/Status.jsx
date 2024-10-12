

const ActionStatus = ({ status }) => {
  let statusClass;
  let label;

  switch (status) {
    case 1:
      statusClass = "bg-green-500";
      label = "Thành công";
      break;
    case 2:
      statusClass = "bg-red-500";
      label = "Thất bại";
      break;
    default:
      statusClass = "bg-gray-500";
      label = "Unknown";
  }
  return (
    <span
      className={`text-sm  me-2 px-2.5 py-0.5 rounded ms-3 font-bold ${statusClass}`}
    >
      {label}
    </span>
  );
};
export default ActionStatus;
