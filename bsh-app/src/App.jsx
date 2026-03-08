import { useState } from "react";

const SHIFTS = {
  MO: { day: "Monday", date: "9 Feb", type: "MORNING SHIFT", time: "06:00 - 14:30", hours: "8.5h", location: "Assembly Line B – Station 4", break: "30 min. break (10:00 – 10:30)", team: [{ initials: "AK", name: "A. Klein", color: "#FF6840" }, { initials: "SR", name: "S. Richter", color: "#333" }, { initials: "PM", name: "P. Müller", color: "#6B5CE7" }] },
  TU: { day: "Tuesday", date: "10 Feb", type: "MORNING SHIFT", time: "06:00 - 14:30", hours: "8.5h", location: "Assembly Line B – Station 4", break: "30 min. break (10:00 – 10:30)", team: [{ initials: "AK", name: "A. Klein", color: "#FF6840" }, { initials: "SR", name: "S. Richter", color: "#333" }, { initials: "PM", name: "P. Müller", color: "#6B5CE7" }] },
  WE: { day: "Wednesday", date: "11 Feb", type: "LATE SHIFT", time: "14:30 - 23:00", hours: "8.5h", location: "Assembly Line C – Station 2", break: "30 min. break (18:00 – 18:30)", team: [{ initials: "TW", name: "T. Wagner", color: "#2196F3" }, { initials: "BH", name: "B. Hoffmann", color: "#4CAF50" }] },
  TH: { day: "Thursday", date: "12 Feb", type: "MORNING SHIFT", time: "06:00 - 14:30", hours: "8.5h", location: "Assembly Line B – Station 4", break: "30 min. break (10:00 – 10:30)", team: [{ initials: "AK", name: "A. Klein", color: "#FF6840" }, { initials: "LB", name: "L. Baumann", color: "#9C27B0" }] },
  FR: { day: "Friday", date: "13 Feb", type: "MORNING SHIFT", time: "06:00 - 14:30", hours: "8h", location: "Assembly Line B – Station 4", break: "30 min. break (10:00 – 10:30)", team: [{ initials: "SR", name: "S. Richter", color: "#333" }, { initials: "PM", name: "P. Müller", color: "#6B5CE7" }] },
  SA: null,
  SU: null,
};

const DAYS = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
const DATES = [9, 10, 11, 12, 13, 14, 15];

export default function BSHShiftWidget() {
  const [selected, setSelected] = useState("TU");
  const shift = SHIFTS[selected];

  return (
    <div style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif", background: "#F4F4F4", minHeight: "100vh", display: "flex", justifyContent: "center", padding: "24px 16px" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      <div style={{ width: "100%", maxWidth: 420, display: "flex", flexDirection: "column", gap: 12 }}>

        {/* Header */}
        <div style={{ background: "#000", borderRadius: 20, padding: "24px 24px 20px", color: "#fff" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
            <div style={{ background: "#FF6840", width: 32, height: 32, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 13, color: "#fff" }}>BSH</div>
            <span style={{ fontWeight: 800, fontSize: 22, letterSpacing: "-0.5px" }}>My Shift Plan</span>
          </div>
          <div style={{ color: "#FF6840", fontWeight: 700, fontSize: 15, marginBottom: 8 }}>CW 7 / 2026</div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#aaa", fontSize: 13, fontWeight: 500 }}>
            <span>📍</span> BSH Plant Munich – Production Dept. B
          </div>
        </div>

        {/* Stats */}
        <div style={{ background: "#fff", borderRadius: 20, padding: "20px 24px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
          {[{ value: "38.5h", label: "Weekly Hours" }, { value: "5", label: "Shifts" }, { value: "2", label: "Days Off" }].map(({ value, label }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ color: "#FF6840", fontWeight: 800, fontSize: 26, letterSpacing: "-1px" }}>{value}</div>
              <div style={{ color: "#888", fontSize: 12, fontWeight: 500, marginTop: 2 }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Week nav */}
        <div style={{ background: "#fff", borderRadius: 20, padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button style={{ background: "#F4F4F4", border: "none", borderRadius: 10, width: 36, height: 36, cursor: "pointer", fontSize: 14 }}>◀</button>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontWeight: 700, fontSize: 16 }}>Calendar Week 7</div>
            <div style={{ color: "#888", fontSize: 12, fontWeight: 500 }}>10 Feb – 15 Feb 2026</div>
          </div>
          <button style={{ background: "#F4F4F4", border: "none", borderRadius: 10, width: 36, height: 36, cursor: "pointer", fontSize: 14 }}>▶</button>
        </div>

        {/* Day selector */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 6 }}>
          {DAYS.map((day, i) => {
            const isSelected = selected === day;
            const hasShift = !!SHIFTS[day];
            return (
              <button key={day} onClick={() => setSelected(day)} style={{ background: isSelected ? "#FF6840" : "#fff", border: "none", borderRadius: 14, padding: "10px 0", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 4, boxShadow: isSelected ? "0 4px 12px rgba(255,104,64,0.35)" : "none", transition: "all 0.15s ease" }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: isSelected ? "rgba(255,255,255,0.8)" : "#888", letterSpacing: "0.5px" }}>{day}</span>
                <span style={{ fontSize: 17, fontWeight: 800, color: isSelected ? "#fff" : "#000" }}>{DATES[i]}</span>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: isSelected ? "rgba(255,255,255,0.7)" : hasShift ? "#FF6840" : "#ddd" }} />
              </button>
            );
          })}
        </div>

        {/* Shift card */}
        {shift ? (
          <div style={{ background: "#fff", borderRadius: 20, padding: "22px 24px", borderLeft: "4px solid #FF6840", display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <div style={{ display: "inline-block", background: "#FFF0EC", color: "#FF6840", fontWeight: 700, fontSize: 11, letterSpacing: "1px", padding: "4px 10px", borderRadius: 8, marginBottom: 12 }}>{shift.type}</div>
              <div style={{ fontWeight: 800, fontSize: 30, letterSpacing: "-1px", color: "#000" }}>
                {shift.time} <span style={{ fontSize: 15, fontWeight: 600, color: "#888" }}>({shift.hours})</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 18 }}>📅</span>
                <span style={{ fontSize: 14, color: "#333" }}><strong>{shift.day}</strong>, {shift.date} 2026</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 18 }}>📍</span>
                <span style={{ fontSize: 14, color: "#555" }}>{shift.location}</span>
              </div>
            </div>
            <div style={{ background: "#F9F9F9", borderRadius: 12, padding: "10px 14px", display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#666" }}>
              ☕ {shift.break}
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#aaa", letterSpacing: "1px", marginBottom: 10 }}>YOUR TEAM THIS SHIFT</div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {shift.team.map(({ initials, name, color }) => (
                  <div key={name} style={{ display: "flex", alignItems: "center", gap: 8, background: "#F4F4F4", borderRadius: 50, padding: "6px 14px 6px 6px" }}>
                    <div style={{ width: 30, height: 30, borderRadius: "50%", background: color, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 11 }}>{initials}</div>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#333" }}>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div style={{ background: "#fff", borderRadius: 20, padding: "40px 24px", textAlign: "center", color: "#bbb", fontWeight: 600, fontSize: 15, borderLeft: "4px solid #eee" }}>
            🏖️ Day Off
          </div>
        )}
      </div>
    </div>
  );
}