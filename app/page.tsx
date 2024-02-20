import Button from "./components/Button";

export default function Home() {
  return (
    <>
      <div className="hero-section">
        <div className="container flex flex-col gap-4 justify-center items-center text-center h-full">
          <h1>Page Name</h1>
          <p className="mb-2 max-w-[60%]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            placeat cumque nam, amet nemo laborum ipsum similique accusantium
            velit nostrum quod. Quos dolores quibusdam sapiente dolore mollitia
            cupiditate! Esse, quidem!
          </p>
          <Button buttonText="Contact Us" />
        </div>
      </div>
      <div className="h-[300vh]"></div>
    </>
  );
}
