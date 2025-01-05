import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function CombinationPage() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
      <Card>
        <CardHeader>
          <CardTitle>Intersection</CardTitle>
        </CardHeader>
        <CardContent>
          <Button id="one" data-testid="ambiguous-button">Alpha</Button>
          <Button id="two" data-testid="ambiguous-button">Bravo</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Union</CardTitle>
        </CardHeader>
        <CardContent>
          <Button id="three" data-testid="distinct-button-1">Charlie</Button>
          <Button id="four" data-testid="distinct-button-2">Delta</Button>
        </CardContent>
      </Card>
    </div>
  )
}
