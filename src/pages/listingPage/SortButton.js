import React from "react";

import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Dropdown, message, Space, Tooltip } from "antd";
import { useDevice } from "../../hook/useDevice";

const handleMenuClick = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};

const items = [
  {
    label: "Price low to high",
    key: "1",
    icon: <UserOutlined />,
  },
  {
    label: "Price high to low",
    key: "2",
    icon: <UserOutlined />,
  },
  {
    label: "New to old",
    key: "3",
    icon: <UserOutlined />,
    danger: true,
  },
  {
    label: "old to new",
    key: "4",
    icon: <UserOutlined />,
    danger: true,
    // disabled: true,
  },
];

const menuProps = {
  items,
  onClick: handleMenuClick,
};

const SortButton = () => {
  const {isMobile} = useDevice();
  return (
    <>
    {isMobile ? <><Dropdown menu={menuProps}>
      <Button>
        <Space >
          <div className="flex flex-row justify-center items-center gap-3" >
            <div> Sort</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25px"
              height="25px"
              viewBox="0 0 24 24"
            >
              <g fill="none" stroke="currentColor" stroke-linecap="round">
                <path d="M5 12V4m14 16v-3M5 20v-4m14-3V4m-7 3V4m0 16v-9" />
                <circle cx="5" cy="14" r="2" />
                <circle cx="12" cy="9" r="2" />
                <circle cx="19" cy="15" r="2" />
              </g>
            </svg>
          </div>

        </Space>
      </Button>
    </Dropdown></> : <><Dropdown menu={menuProps}>
      <Button>
        <Space >
          <div className="flex flex-row justify-center items-center gap-3" >
            <div> Sort by recommended</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35px"
              height="35px"
              viewBox="0 0 24 24"
            >
              <g fill="none" stroke="currentColor" stroke-linecap="round">
                <path d="M5 12V4m14 16v-3M5 20v-4m14-3V4m-7 3V4m0 16v-9" />
                <circle cx="5" cy="14" r="2" />
                <circle cx="12" cy="9" r="2" />
                <circle cx="19" cy="15" r="2" />
              </g>
            </svg>
          </div>

        </Space>
      </Button>
    </Dropdown></>}
    </>
    
  );
};

export default SortButton;
