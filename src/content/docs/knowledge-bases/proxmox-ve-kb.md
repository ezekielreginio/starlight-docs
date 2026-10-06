---
title: Proxmox VE Knowledge Base
description: Guide and documentation for Proxmox VE.
---

# Proxmox VE Architecture & Reference KB 🛠️

## 1. System Architecture & Core Concepts 🏛️
* **Virtualization Types**: Uses KVM for full hardware virtualization and LXC for lightweight Linux containers on top of a Debian Linux base[cite: 1].
* **Proxmox Cluster File System (pmxcfs)**: Database-driven file system that replicates node configurations across the cluster in real time using Corosync[cite: 1].
* **Memory & Storage Constraints**: Keeps a copy of configuration data in RAM for high performance, capped at a maximum storage size of 128 MiB[cite: 1].
* **Interfaces**: Features an ExtJS-based Web GUI, Unix shell commands with auto-completion, and a RESTful API returning JSON schema outputs[cite: 1].

---

## 2. Primary Configuration Files (`/etc/pve/`) 📁
* **`/etc/pve/corosync.conf`**: Defines cluster nodes, network rings, and quorum votes[cite: 1].
* **`/etc/pve/datacenter.cfg`**: Datacenter-wide settings including default keyboard layouts and HTTP proxies[cite: 1].
* **`/etc/pve/storage.cfg`**: Configures global storage definitions, directory pools, and block targets[cite: 1].
* **`/etc/pve/qemu-server/<VMID>.conf`**: Stores individual QEMU/KVM virtual machine options[cite: 1].
* **`/etc/pve/lxc/<CTID>.conf`**: Stores individual Linux container configurations[cite: 1].
* **`/etc/pve/firewall/cluster.fw`**: Houses cluster-wide firewall rules and network macros[cite: 1].

---

## 3. Important Daemons & Services ⚙️
* **`pvedaemon`**: Primary API daemon processing execution requests[cite: 1].
* **`pveproxy`**: Web interface proxy daemon directing traffic to the REST API[cite: 1].
* **`pvestatd`**: Status daemon collecting node usage metrics and health statistics[cite: 1].
* **`pvescheduler`**: Handles scheduled cluster tasks such as backups and replication[cite: 1].

---

## 4. Key Command-Line Utilities 💻
* **`pvecm`**: Creates clusters, joins new nodes, and checks Corosync quorum status[cite: 1].
* **`qm`**: Controls KVM virtual machines (creation, disk moves, CPU models, snapshots)[cite: 1].
* **`pct`**: Manages LXC containers (creation, network bridges, rootfs sizing)[cite: 1].
* **`pvesm`**: Storage manager tool for allocating, listing, and moving storage volumes[cite: 1].