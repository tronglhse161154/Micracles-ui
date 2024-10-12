

import ActionStatus from "./Status";

const Content = ({orderId, status, price, description, action}) => {
  return (
    <div>
      <h3 className="flex items-center mb-1 text-lg font-semibold text-dar">
        Mã đơn hàng : {orderId}
        <ActionStatus status={status} />
      </h3>
      <time className="block mb-2 text-sm font-semibold tracking-wider leading-none text-black">
        {action} {price}
      </time>
      <p className="mb-4 text-base font-normal text-gray-500">
        {description}
      </p>
    </div>
  );
};

export default Content;
