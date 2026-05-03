# SICKLE++: Sentinel-1 Imagery for Crop Knowledge and Land Evaluation

![SICKLE++ Benchmark](public/hero.jpg)

A comprehensive research website and benchmark platform for crop phenology and yield prediction using satellite imagery. SICKLE++ extends the original SICKLE dataset with zero-shot generalization across geographic regions, comparing multi-sensor fusion approaches across diverse agricultural contexts.

## Overview

SICKLE++ benchmarks ground-level Andhra Pradesh crop data against models trained on the original SICKLE dataset. This work evaluates cross-region generalization of satellite-based phenology and yield prediction without task-specific retraining.

- **Phase 1 (Foundation):** Original Tamil Nadu dataset (WACV 2024) establishing baseline performance with multi-sensor fusion (Sentinel-1, Sentinel-2, Landsat-8) across 5 crop phenology and yield prediction tasks.

- **Phase 2 (Andhra Pradesh Benchmark):** Ground-level validation using Phase 1-trained models on 730 CIMMYT CSISA plots in Andhra Pradesh, testing zero-shot cross-region generalization without retraining.

**Main Experimentation Repository:** [github.com/riju-talk/sickle-plus-plus](https://github.com/riju-talk/sickle-plus-plus)

**Research Tasks:**
1. Crop Type Classification
2. Sowing Date Regression (MAE in days)
3. Transplanting Date Regression (MAE in days)
4. Harvesting Date Regression (MAE in days)
5. Yield Prediction (MAPE in percentage)

## Repository Structure

```
sickle-/
├── public/                          # Static assets
│   ├── hero.jpg                    # Hero section background
│   ├── pipeline.png                # Data pipeline diagram
│   ├── SICKLE_compressed.pdf       # Presentation slides
│   └── robots.txt
├── src/
│   ├── pages/
│   │   ├── Home.tsx                # Main landing page with all sections
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── components/
│   │   ├── features/               # Feature-specific components
│   │   │   ├── DataPipeline.tsx
│   │   │   ├── DatasetSection.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── KeyContributions.tsx
│   │   │   ├── PresentationSection.tsx
│   │   │   ├── SystemDesignFlow.tsx
│   │   │   └── VideoSection.tsx
│   │   ├── layout/                 # Layout components
│   │   │   ├── Navbar.tsx          # Fixed navigation with smooth scrolling
│   │   │   └── Footer.tsx          # Project footer with acknowledgments
│   │   └── ui/                     # shadcn-ui components
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── eslint.config.js
├── components.json
└── README.md
```

## Technology Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS with custom animations
- **UI Components:** shadcn-ui
- **Icons:** Lucide React
- **Routing:** React Router

## Key Features

### 1. **Phase 1 Results (Tamil Nadu Baseline)**
- Multi-sensor fusion benchmarking on original SICKLE dataset
- Best performance per sensor/task combination:
  - Crop Type Classification: 81.77% IoU (Sentinel-1 only)
  - Sowing Date: 2.30 days MAE (Sentinel-2)
  - Transplanting Date: 6.16 days MAE (Sensor fusion)
  - Harvesting Date: 8.83 days MAE (Sentinel-2)
  - Yield Prediction: 59.38% MAPE (Landsat-8)

### 2. **Phase 2 Results (Andhra Pradesh Zero-Shot)**
- Cross-region generalization testing with 730 CIMMYT CSISA plots
- Same models from Phase 1 applied without retraining
- Comparable metric structure for fair comparison

### 3. **Responsive Design**
- Mobile-first architecture with responsive typography
- Optimized table layouts for all screen sizes
- Hero section with atmospheric background imagery
- Smooth scrolling navigation with anchor links

### 4. **Embedded Media**
- YouTube presentation video
- PDF viewer for research slides (SICKLE_compressed.pdf)
- Pipeline diagram visualization
- Responsive iframe containers

### 5. **Comprehensive Appendices**
- Crop Type Classification across all sensor/model combinations
- Phenology Regression metrics (sowing, transplanting, harvesting)
- Yield Prediction results with MAE, RMSE, MAPE statistics

## Data Sources

- **Phase 1 Dataset:** Original SICKLE collection from Tamil Nadu, India (WACV 2024)
- **Phase 2 Dataset:** CIMMYT CSISA plots, Andhra Pradesh, India (2018 Rabi season)
- **Satellite Imagery:**
  - Sentinel-1 SAR (C-band, VV/VH polarization) via ESA Copernicus
  - Sentinel-2 MSI (10/20m optical bands) via ESA Copernicus
  - Landsat-8 OLI (30m multispectral) via USGS
  - Data access via SentinelHub API and Google Earth Engine

## Navigation

The website includes smooth scroll navigation to the following sections:

- **Overview** – Project introduction and SICKLE framework
- **Problem Statement** – Agricultural monitoring challenges and research motivation
- **Existing Work** – SICKLE Foundation and Phase 1 baseline results
- **Phase 2** – Andhra Pradesh dataset and zero-shot evaluation setup
- **Results** – Comprehensive Phase 1 & Phase 2 metrics and analysis
- **Pipeline** – System architecture and data processing workflow

## Customization

### Colors & Theming
Edit `tailwind.config.ts` to modify:
- Navy background palette (primary: `#0f172a`)
- Sage accent palette (primary: `#f1f5f2`)
- Brand green color (primary: `#22c55e`)
- Custom animations (fade-up, fade-in, slide-right)

### Adding Content Sections
1. Update `src/pages/Home.tsx` to add new section content
2. Add navigation link to `src/components/layout/Navbar.tsx`
3. Assign `id` attribute to new section for smooth scroll linking
4. Update Tailwind classes for responsive breakpoints

## Performance Notes

- **Static Site Generation:** All content pre-rendered at build time
- **Image Optimization:** Hero background at optimized resolution
- **PDF Viewer:** Embedded via iframe (ensure CORS headers on production)
- **Responsive Tables:** CSS overflow-x for mobile, min-width containers

## Acknowledgments

This research builds upon datasets and infrastructure provided by:
- **CIMMYT** – CSISA program and Andhra Pradesh field site coordination
- **ESA Copernicus Programme** – Sentinel-1 and Sentinel-2 satellite data
- **USGS Earth Explorer** – Landsat-8 satellite imagery
- **Google Earth Engine** – Cloud computing for large-scale analysis
- **ICAR (Indian Council of Agricultural Research)** – Agricultural domain expertise

## Citation

For research using SICKLE or SICKLE++, please cite:
```
@inproceedings{sickle2024,
  title={SICKLE: Sentinel-1 Imagery for Crop Knowledge and Land Evaluation},
  booktitle={Proceedings of the IEEE/CVF Winter Conference on Computer Vision and Applications (WACV)},
  year={2024}
}
```

## Support

For questions or issues related to the SICKLE++ research, please refer to the embedded presentation PDF in the "Existing Work" section or contact the research team.

---

**Last Updated:** May 2026
