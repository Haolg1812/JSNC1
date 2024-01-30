const gameEvents = new Map([
    [17,' GOAL'],
    [36,' Subsfitution'],
    [47,' GOAL'],
    [61,' Subsfitution'],
    [64,' Yellow card'],
    [69,' Red card'],
    [76,' GOAL'],
    [80,' GOAL'],
    [92,' Yellow card'],
    ]);
     // Sử dụng câu lệnh events
    
    //1. In ra nhưng giá trị trong mảng bằng event
    const events =[...new Set(gameEvents.values())] ;
    
    console.log(events);
    // const events
    
    //2. Xóa biến 64
    gameEvents.delete(64);  
    //3. Tính trung bình thục tế
    console.log(`An event happened , on avrage , every ${90 / gameEvents.size} minutes`);  
    
    const time = [...gameEvents.keys()].pop();
    console.log(
        `An event happened , on avrage , every ${time / gameEvents.size} minutes`  
    );
    
    //4. IN ra thông báo vs for 
    for (const [min,event] of gameEvents) {
        const half = min <= 45 ? 'FRIST' : 'SECOND';
        console.log(`[HALF] ${min}: ${event} `);
    }
    
    
    