import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContextMenuShortcut } from "@/components/ui/context-menu";
import { ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger } from "@radix-ui/react-context-menu";

export function InteractivityPage() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
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
              Right click here
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
              <ContextMenuSub>
                <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
                <ContextMenuSubContent className="w-48">
                  <ContextMenuItem>
                    Save Page As...
                    <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
                  </ContextMenuItem>
                  <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                  <ContextMenuItem>Name Window...</ContextMenuItem>
                  <ContextMenuSeparator />
                  <ContextMenuItem>Developer Tools</ContextMenuItem>
                </ContextMenuSubContent>
              </ContextMenuSub>
              <ContextMenuSeparator />
              <ContextMenuCheckboxItem checked>
                Show Bookmarks Bar
                <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
              </ContextMenuCheckboxItem>
              <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
              <ContextMenuSeparator />
              <ContextMenuRadioGroup value="pedro">
                <ContextMenuLabel>People</ContextMenuLabel>
                <ContextMenuSeparator />
                <ContextMenuRadioItem value="pedro">Pedro Duarte</ContextMenuRadioItem>
                <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
              </ContextMenuRadioGroup>
            </ContextMenuContent>
          </ContextMenu>
        </CardContent>
      </Card>
    </div>
  );
}

/*
      <ContextMenu>
        <ContextMenuTrigger
          data-testid="target"
          className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed border-slate-200 text-sm dark:border-slate-700"
        >
          Right click here
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
          <ContextMenuSub>
            <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              <ContextMenuItem>
                Save Page As...
                <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>Create Shortcut...</ContextMenuItem>
              <ContextMenuItem>Name Window...</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>Developer Tools</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuCheckboxItem checked>
            Show Bookmarks Bar
            <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
          <ContextMenuSeparator />
          <ContextMenuRadioGroup value="pedro">
            <ContextMenuLabel>People</ContextMenuLabel>
            <ContextMenuSeparator />
            <ContextMenuRadioItem value="pedro">Pedro Duarte</ContextMenuRadioItem>
            <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuContent>
      </ContextMenu>

*/
