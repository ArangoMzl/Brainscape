'use client'
import { useState } from "react";
import { Divider } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { CheckboxGroup } from "@nextui-org/react";
import { CustomCheckbox } from "@/components/CustomCheckbox";

export default function Home() {
	const [groupSelected, setGroupSelected] = useState([]);
	return (
		<div className="flex h-full w-full relative">
			<div className="flex h-full w-full justify-center items-center absolute">
				<div className="flex h-96 items-center space-x-4">
					<div className="flex h-full items-end">
						<div className="flex-col items-end">
							<Input type="text" variant='underlined' label="Tarea" className="w-72" />
							<div className="flex my-3 justify-between">
								<Checkbox color="danger">Importante</Checkbox>
								<Button color="primary">
									Agregar
								</Button>
							</div>
						</div>
					</div>
					<Divider orientation="vertical" className="px-0.5" />
					<div className="flex flex-col gap-1 w-full">
						<CheckboxGroup
							label="Tareas Completadas"
							value={groupSelected}	
							classNames={{
								base: "w-full"
							}}
						>
							<CustomCheckbox
								value="junior"
								user={{
									name: "Junior Garcia",
									avatar: "https://avatars.githubusercontent.com/u/30373425?v=4",
									username: "jrgarciadev",
									url: "https://twitter.com/jrgarciadev",
									role: "Software Developer",
									status: "Priority",
								}}
								statusColor="danger"
							/>
							<CustomCheckbox
								value="johndoe"
								user={{
									name: "John Doe",
									avatar: "https://i.pravatar.cc/300?u=a042581f4e29026707d",
									username: "johndoe",
									url: "#",
									role: "Product Designer",
									status: "Not Priority",
								}}
								statusColor="primary"
							/>
							<CustomCheckbox
								value="zoeylang"
								user={{
									name: "Zoey Lang",
									avatar: "https://i.pravatar.cc/300?u=a042581f4e29026704d",
									username: "zoeylang",
									url: "#",
									role: "Technical Writer",
									status: "Not Priority",
								}}
								statusColor="primary"
							/>
							<CustomCheckbox
								value="william"
								user={{
									name: "William Howard",
									avatar: "https://i.pravatar.cc/300?u=a048581f4e29026701d",
									username: "william",
									url: "#",
									role: "Sales Manager",
									status: "Not Priority",
								}}
								statusColor="primary"
							/>
						</CheckboxGroup>
					</div>
				</div>
			</div>
		</div>
	);
}
