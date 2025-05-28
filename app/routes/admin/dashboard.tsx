import Header from "components/Header";

const dashboard = () => {
  const user = { name: "John Doe" };
  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome ${user?.name ?? "Guest"}`}
        description="Track activity, trends and popular destination in real time"
      />
    </main>
  );
};

export default dashboard;
