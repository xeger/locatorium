import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContextMenuShortcut } from "@/components/ui/context-menu";
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@radix-ui/react-context-menu";
import { useCallback, useState } from "react";

export function InteractivityPage() {
  const [last, setLast] = useState('(none)')

  const onClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    setLast(e.currentTarget.textContent ?? '')
  }, [setLast])

  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
      <div className="font-bold flex justify-center">
        Last button clicked: <span data-testid="last-clicked">{last}</span>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Click</CardTitle>
        </CardHeader>
        <CardContent>
          <Button data-testid="click-target" onClick={onClick}>Alpha</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Right Click</CardTitle>
        </CardHeader>
        <CardContent>
          <ContextMenu>
            <ContextMenuTrigger
              data-testid="right-click-target"
              className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed border-slate-200 text-sm dark:border-slate-700"
            >
              Bravo
            </ContextMenuTrigger>
            <ContextMenuContent className="w-64">
              <ContextMenuItem>
                Back
                <ContextMenuShortcut>⌘[</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem disabled>
                Forward
                <ContextMenuShortcut>⌘]</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                Reload
                <ContextMenuShortcut>⌘R</ContextMenuShortcut>
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </CardContent>
      </Card>
    </div>
  );
}
