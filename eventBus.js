import React, { createContext, useContext, useState } from "react";

// 创建一个 Context 用于事件总线
const EventBusContext = createContext();

// 提供事件总线的 Provider 组件
export const EventBusProvider = ({ children }) => {
  const [events, setEvents] = useState({});

  const subscribe = (eventName, callback) => {
    setEvents((prevEvents) => ({
      ...prevEvents,
      [eventName]: [...(prevEvents[eventName] || []), callback],
    }));
  };

  const publish = (eventName, data) => {
    if (events[eventName]) {
      events[eventName].forEach((callback) => callback(data));
    }
  };

  return (
    <EventBusContext.Provider value={{ subscribe, publish }}>
      {children}
    </EventBusContext.Provider>
  );
};

// 在需要使用事件总线的组件中使用 useContext 获取事件总线
export const useEventBus = () => useContext(EventBusContext);

// 使用示例
const SenderComponent = () => {
  const { publish } = useEventBus();

  const handleClick = () => {
    publish("customEvent", { message: "Hello from SenderComponent" });
  };

  return <button onClick={handleClick}>Send Event</button>;
};

const ReceiverComponent = () => {
  const { subscribe } = useEventBus();

  subscribe("customEvent", (data) => {
    console.log("Received event:", data.message);
  });

  return <div>Receiver Component</div>;
};

const App = () => {
  return (
    <EventBusProvider>
      <SenderComponent />
      <ReceiverComponent />
    </EventBusProvider>
  );
};

export default App;
