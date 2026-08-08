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

## Data Sources

- **Phase 1 Dataset:** Original SICKLE collection from Tamil Nadu, India (WACV 2024)
- **Phase 2 Dataset:** CIMMYT CSISA plots, Andhra Pradesh, India (2018 Rabi season)
- **Satellite Imagery:**
  - Sentinel-1 SAR (C-band, VV/VH polarization) via ESA Copernicus
  - Sentinel-2 MSI (10/20m optical bands) via ESA Copernicus
  - Landsat-8 OLI (30m multispectral) via USGS
  - Data access via SentinelHub API and Google Earth Engine

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
