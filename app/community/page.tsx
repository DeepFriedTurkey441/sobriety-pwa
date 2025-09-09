import { supabase } from "@/lib/supabaseClient";

type Topic = {
  slug: string;
  title: string;
  description: string | null;
  order_idx: number | null;
};

export default async function CommunityPage() {
  const { data, error } = await supabase
    .from("topics")
    .select("slug, title, description, order_idx")
    .order("order_idx", { ascending: true });

  if (error) {
    return (
      <div style={{ padding: 24 }}>
        <h1>Community</h1>
        <p>Failed to load topics.</p>
        <pre style={{ whiteSpace: "pre-wrap" }}>{error.message}</pre>
      </div>
    );
  }

  const topics: Topic[] = data ?? [];

  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ fontSize: 24, fontWeight: 600, marginBottom: 12 }}>Community</h1>
      {topics.length === 0 ? (
        <p>No topics yet.</p>
      ) : (
        <ul style={{ display: "grid", gap: 12 }}>
          {topics.map((t) => (
            <li
              key={t.slug}
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: 8,
                padding: 16,
              }}
            >
              <div style={{ fontWeight: 600 }}>{t.title}</div>
              {t.description ? (
                <div style={{ opacity: 0.8 }}>{t.description}</div>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


