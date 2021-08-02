#!/bin/bash

sudo apt install -y lld libopus0 libopus-dev libssl1.1 libssl-dev pkg-config gcc git
wget -O "rustup.sh" https://sh.rustup.rs
chmod +x rustup.sh
./rustup.sh -q -y --default-toolchain nightly
source ~/.cargo/env
git clone https://github.com/tazz4843/scripty.git
git clone https://github.com/tazz4843/deepspeech-rs.git
mkdir ds && cd ds
wget -O "deepspeech.tar.xz" https://github.com/mozilla/DeepSpeech/releases/download/v0.9.3/native_client.amd64.cpu.linux.tar.xz
tar xf deepspeech.tar.xz
cd ..
sudo mv ds/libdeepspeech.so /usr/lib/libdeepspeech.so
cd scripty
RUSTFLAGS="-Ctarget-cpu=native" cargo build --release
cd ..
mkdir scripty-run
cp scripty/target/release/scripty scripty-run/scripty
cd scripty-run
chmod u+x scripty
./scripty
