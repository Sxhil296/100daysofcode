type GreetProps = {
  name: string;
  tapeCount?: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  const {tapeCount = 0} = props
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name}! You have to return ${tapeCount} video tapes.`
          : `Welcome Guest!`}
      </h2>
    </div>
  );
};
