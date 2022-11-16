interface Time {
  unixtime: number;
}

async function getCurrentTime() {
  // refetch on every request
  // similar to 'getServerSideProps'
  const res = await fetch(
    "http://worldtimeapi.org/api/timezone/America/Chicago",
    {
      cache: "no-store",
    }
  );

  const time: Promise<Time> = await res.json();

  return time;
}

export default async function SSRPage() {
  const time = await getCurrentTime();

  return (
    <>
      <h1>Time in Chicago</h1>
      <p>{new Date(time.unixtime * 1000).toString()}</p>
    </>
  );
}
