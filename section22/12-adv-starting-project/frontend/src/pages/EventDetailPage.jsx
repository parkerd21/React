import EventItem from "../components/EventItem";
import { useRouteLoaderData, redirect } from "react-router-dom";

export default function EventDetailPage() {
  const data = useRouteLoaderData('event-detail');
  return <EventItem event={data.event} />;
}

export async function loader({ request, params }) {
  const id = params.id;
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw JSON.stringify(
      { message: "Could not fetch details for selected event." },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}

export async function action({params, request}) {
  console.log({params, request})
  const eventId = params.id;
  const response = await fetch('http://localhost:8080/events/' + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw JSON.stringify(
      { message: "Could not delete event." },
      {
        status: 500,
      }
    );
  }
  return redirect('/events');
}
