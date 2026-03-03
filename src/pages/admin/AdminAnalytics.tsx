import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { revenueByMonth, occupancyByRoom, bookingSources } from "@/data/admin-data";
import { TrendingUp, Brain, MessageSquare } from "lucide-react";

const PIE_COLORS = [
  "hsl(152, 35%, 25%)",
  "hsl(30, 40%, 45%)",
  "hsl(38, 60%, 55%)",
  "hsl(210, 20%, 70%)",
];

const AdminAnalytics = () => (
  <div className="space-y-6">
    {/* Charts Row */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-card border border-border rounded-lg p-5">
        <h3 className="font-heading text-base mb-4">Revenue Trends</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={revenueByMonth}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                background: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: 8,
                fontSize: 12,
              }}
            />
            <Line type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-card border border-border rounded-lg p-5">
        <h3 className="font-heading text-base mb-4">Occupancy by Month</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={occupancyByRoom}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="room" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} unit="%" />
            <Tooltip
              contentStyle={{
                background: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: 8,
                fontSize: 12,
              }}
            />
            <Bar dataKey="occupancy" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Booking Sources */}
      <div className="bg-card border border-border rounded-lg p-5">
        <h3 className="font-heading text-base mb-4">Booking Sources</h3>
        <div className="flex items-center gap-6">
          <ResponsiveContainer width="50%" height={200}>
            <PieChart>
              <Pie
                data={bookingSources}
                dataKey="value"
                nameKey="source"
                cx="50%"
                cy="50%"
                outerRadius={80}
                innerRadius={40}
              >
                {bookingSources.map((_, i) => (
                  <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2">
            {bookingSources.map((s, i) => (
              <div key={s.source} className="flex items-center gap-2 text-sm">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: PIE_COLORS[i % PIE_COLORS.length] }}
                />
                <span className="text-muted-foreground">{s.source}</span>
                <span className="font-medium ml-auto">{s.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Insights */}
      <div className="bg-card border border-border rounded-lg p-5 space-y-5">
        <h3 className="font-heading text-base">AI Insights</h3>

        <div className="bg-muted rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp size={16} className="text-primary" />
            <span className="text-sm font-medium">Smart Pricing</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Based on current demand patterns, consider increasing the Fireplace Suite rate by 10–15% for the Easter period (April 18–22). Weekend rates for Classic Comfort could be raised by €15 without impacting occupancy.
          </p>
        </div>

        <div className="bg-muted rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <MessageSquare size={16} className="text-primary" />
            <span className="text-sm font-medium">Sentiment Analysis</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Guest review sentiment is 94% positive. Top praised: mountain views, breakfast quality, staff warmth. Area for improvement: Wi-Fi speed mentioned in 3 recent reviews.
          </p>
        </div>

        <div className="bg-muted rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Brain size={16} className="text-primary" />
            <span className="text-sm font-medium">Recommendation</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Your Deluxe Mountain View room is your strongest performer at 78% occupancy. Consider adding a second similar room type to capture unmet demand.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default AdminAnalytics;
