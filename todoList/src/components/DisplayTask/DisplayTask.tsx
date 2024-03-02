interface IDisplayTask {
  title: string;
}
const DisplayTask: React.FC<IDisplayTask> = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
    </>
  );
};

export default DisplayTask;
