const About = () => {
  return (
    <div className="max-w-4xl min-h-screen mx-auto my-20 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4">About Smart First Aid</h1>
      <p className="text-lg text-gray-700 mb-4">
        This project aims to develop a cost-effective and reliable smart first
        aid kit rover capable of monitoring vital health parameters, storing
        data in real-time, and navigating autonomously to assist users in
        emergency scenarios.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        The rover will leverage the capabilities of the Arduino Mega, ESP32, and
        various sensors to achieve its functionalities. It aims to enhance the
        efficiency of emergency medical response and provide a robust platform
        for continuous health monitoring.
      </p>
      <p className="text-lg text-gray-700">
        Our mission is to create a smart first aid kit that can save lives by
        providing timely and accurate health data, ensuring that users receive
        the best possible care in emergency situations.
      </p>
    </div>
  );
};

export default About;
