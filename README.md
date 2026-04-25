# Ventyr

**Next-generation health monitoring for every athlete**

Ventyr is a personal health intelligence platform built on Garmin's wearable ecosystem. It computes personalized recovery, strain, sleep performance, blood pressure estimation, biological age, and stress metrics — all from transparent, open formulas rather than black-box algorithms. Built for data ownership: self-hostable via Docker, or available as a managed cloud service.

## Tech Stack

- **Frontend:** React 18 + Vite + TypeScript + Tailwind CSS v4
- **Animations:** Framer Motion + lucide-react
- **Backend (planned):** FastAPI (Python 3.11) + PostgreSQL 16
- **Data Collection:** Garmin Connect API + APScheduler (15 min sync)
- **ML:** scikit-learn, NumPy, pandas (BP estimation, biological age)
- **Infrastructure:** Hetzner VPS (Helsinki) + Docker Compose + Let's Encrypt TLS
- **Notifications:** Web Push (VAPID) + Telegram Bot API

## Live Site

[ventyr.pro](https://ventyr.pro)

## Note

Currently in private development — Phase 1. Public release planned for Q4 2026.
