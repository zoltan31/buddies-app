import Card from "../../../components/Card";

const announcements = [
  {
    id: 1,
    title: "New features",
    preview:
      "Thanks for using Building Buddies! We're happy to announce that we published version 1.0.1, which brings many new features. To learn more click here!",
  },
  {
    id: 2,
    title: "New privacy policy",
    preview: "We've updated our privacy policy. To learn more click here.",
  },
  {
    id: 3,
    title: "Maintenance downtime on 24th December, 2021",
    preview:
      "To bring you the best experience we're constantly updating our product. A major update will come on 24th of December therefore we will schedule a 2 hour of downtime.",
  },
];

export default function News() {
  return (
    <Card>
      <div className="px-4 py-5 sm:px-6">
        <h1 className="text-base font-medium text-gray-900">News</h1>
        <div>
          <div className="flow-root mt-6">
            <ul className="-my-5 divide-y divide-gray-200">
              {announcements.map((announcement) => (
                <li key={announcement.id} className="py-5">
                  <div className="relative focus-within:ring-2 focus-within:ring-indigo-500">
                    <h3 className="text-sm font-semibold text-gray-800">
                      <p className="hover:underline focus:outline-none">
                        {/* Extend touch target to entire panel */}
                        <span className="absolute inset-0" aria-hidden="true" />
                        {announcement.title}
                      </p>
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                      {announcement.preview}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Card>
  );
}
