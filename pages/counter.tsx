import { useState } from "react";

import { Box, Button, Container } from "@mui/material";

interface CounterProps {
	initialCount: number;
}

const Counter = ({ initialCount = 0 }: CounterProps) => {
	const [count, setCount] = useState(initialCount);

	const handleIncrement = () => setCount(count + 1);
	const handleDecrement = () => setCount(count - 1);

	return (
		<Container maxWidth="lg">
			<Box sx={{ my: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
				<h1>Counter</h1>
				<h2>{count}</h2>
				<Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
					<Button variant="contained" color="success" onClick={handleIncrement}>+ Increment</Button>
					<Button variant="contained" color="error" onClick={handleDecrement}>- Decrement</Button>
				</Box>
			</Box>
		</Container>
	)
}

export default Counter;