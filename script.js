const preview = document.getElementById('preview');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const downloadBtn = document.getElementById('downloadBtn');
const statusBadge = document.getElementById('status');

let mediaRecorder;
let recordedChunks = [];
let mediaStream;

// Start Recording Function
startBtn.addEventListener('click', async () => {
    try {
        // Request Screen Capture with Audio
        mediaStream = await navigator.mediaDevices.getDisplayMedia({
            video: { mediaSource: "screen" },
            audio: true
        });

        // Set Live Preview
        preview.srcObject = mediaStream;

        // Initialize MediaRecorder
        recordedChunks = [];
        mediaRecorder = new MediaRecorder(mediaStream);

        // Collect Recorded Data Chunks
        mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
                recordedChunks.push(event.data);
            }
        };

        // When Recording Stops
        mediaRecorder.onstop = () => {
            const blob = new Blob(recordedChunks, { type: 'video/webm' });
            const videoUrl = URL.createObjectURL(blob);
            
            // Set recorded video to player and create download link
            preview.srcObject = null;
            preview.src = videoUrl;
            preview.controls = true;
            
            downloadBtn.href = videoUrl;
            downloadBtn.classList.remove('hidden');
            
            statusBadge.textContent = "Recording Finished";
            statusBadge.style.color = "#4ade80";
        };

        // Handle user clicking browser's built-in "Stop sharing" button
        mediaStream.getVideoTracks()[0].addEventListener('ended', () => {
            stopRecording();
        });

        // Start Recording
        mediaRecorder.start();

        // Update UI
        startBtn.disabled = true;
        stopBtn.disabled = false;
        downloadBtn.classList.add('hidden');
        statusBadge.textContent = "● Recording Live";
        statusBadge.style.color = "#f87171";

    } catch (error) {
        console.error("Error starting recording:", error);
        alert("Screen recording permission denied or not supported.");
    }
});

// Stop Recording Function
function stopRecording() {
    if (mediaRecorder && mediaRecorder.state !== "inactive") {
        mediaRecorder.stop();
        
        // Stop all tracks (screen sharing icon disappears)
        if (mediaStream) {
            mediaStream.getTracks().forEach(track => track.stop());
        }

        // Update UI
        startBtn.disabled = false;
        stopBtn.disabled = true;
    }
}

stopBtn.addEventListener('click', stopRecording);