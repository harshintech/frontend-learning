// setTimeout(()=> {
//     let aa = document.getElementsByClassName("hack")
//     aa[0].innerHTML = `<p>Intializing Hacking....</p>`
// },3000)


// setTimeout(()=> {
//     let aa = document.getElementsByClassName("hack")
//     aa[1].innerHTML = `<p>Your Device been Hacked....</p>`
// },3000)

// Function that wraps setTimeout in a promise so we can use await
// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// // Async function to run the tasks in sequence
// async function hackSequence() {
//     // First timeout: Update the first element
//     let aa = document.getElementsByClassName("hack");
//     aa[0].innerHTML = `<p>$ ~ Initializing Hacking....</p>`;
    
//     // Wait for 3 seconds before proceeding
//     await delay(3000);
    
//     // Second timeout: Update the second element
//     aa[1].innerHTML = `<p>$ ~ Your Device has been Hacked....</p>`;
    
//     // Wait for another 3 seconds (if necessary) or handle any other logic
//     await delay(3000);

//     aa[2].innerHTML = `<p>$ ~ Your Instagram have been Blocked....</p>`;
    
//     // Wait for another 3 seconds (if necessary) or handle any other logic
//     await delay(3000);
// }

// // Run the async function
// hackSequence();


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function hackSequence() {
    let aa = document.getElementsByClassName("hack");

    aa[0].innerHTML = `<p>$ ~ Booting up stealth protocol...</p>`;
    await delay(1000);
    aa[0].innerHTML = `<p>$ ~ Accessing target database...</p>`;
    await delay(1000);

    aa[1].innerHTML = `<p>$ ~ Scanning for vulnerabilities...</p>`;
    await delay(1000);
    aa[1].innerHTML = `<p>$ ~ Bypassing firewall...</p>`;
    await delay(1000);

    aa[2].innerHTML = `<p>$ ~ Establishing backdoor connection...</p>`;
    await delay(1000);
    aa[2].innerHTML = `<p>$ ~ Data extraction in progress...</p>`;
    await delay(1000);

    aa[3].innerHTML = `<p>$ ~ Disabling security protocols...</p>`;
    await delay(1000);
    aa[3].innerHTML = `<p>$ ~ Uploading malicious payload...</p>`;
    await delay(1000);

    aa[4].innerHTML = `<p>$ ~ Injecting code into system...</p>`;
    await delay(1000);
    aa[4].innerHTML = `<p>$ ~ Command execution successful...</p>`;
    await delay(1000);

    aa[5].innerHTML = `<p>$ ~ Target 5 compromised...</p>`;
    await delay(1000);
    aa[5].innerHTML = `<p>$ ~ Gaining root access...</p>`;
    await delay(1000);

    aa[6].innerHTML = `<p>$ ~ Finalizing data siphoning...</p>`;
    await delay(1000);
    aa[6].innerHTML = `<p>$ ~ Hacking complete...</p>`;
    await delay(1000);

    aa[7].innerHTML = `<p>$ ~ System takeover in progress...</p>`;
    await delay(1000);
    aa[7].innerHTML = `<p>$ ~ Overriding permissions...</p>`;
    await delay(1000);

    aa[8].innerHTML = `<p>$ ~ Encrypting stolen data...</p>`;
    await delay(1000);
    aa[8].innerHTML = `<p>$ ~ Exfiltrating files...</p>`;
    await delay(1000);

    aa[9].innerHTML = `<p>$ ~ Target 10 fully compromised...</p>`;
    await delay(1000);
    aa[9].innerHTML = `<p>$ ~ Mission complete. Devices have been hacked...</p>`;
    await delay(1000);

    // Final message
    for (let i = 0; i < aa.length; i++) {
        aa[i].innerHTML = `<p>$ ~ Your Device ${i + 1} Has Been Hacked....</p>`;
    }
}

hackSequence();
